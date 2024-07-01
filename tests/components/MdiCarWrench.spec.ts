
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarWrench from "../../src/components/MdiCarWrench.vue";

test("MdiCarWrench snapshot", () => {
  const wrapper = mount(MdiCarWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
