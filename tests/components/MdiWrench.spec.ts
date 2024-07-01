
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrench from "../../src/components/MdiWrench.vue";

test("MdiWrench snapshot", () => {
  const wrapper = mount(MdiWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
