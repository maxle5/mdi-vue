
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadphones from "../../src/components/MdiHeadphones.vue";

test("MdiHeadphones snapshot", () => {
  const wrapper = mount(MdiHeadphones, {});
  expect(wrapper.html()).toMatchSnapshot();
});
