
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPipeWrench from "../../src/components/MdiPipeWrench.vue";

test("MdiPipeWrench snapshot", () => {
  const wrapper = mount(MdiPipeWrench, {});
  expect(wrapper.html()).toMatchSnapshot();
});
