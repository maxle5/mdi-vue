
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWan from "../../src/components/MdiWan.vue";

test("MdiWan snapshot", () => {
  const wrapper = mount(MdiWan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
