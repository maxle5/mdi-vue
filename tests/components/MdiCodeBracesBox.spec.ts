
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeBracesBox from "../../src/components/MdiCodeBracesBox.vue";

test("MdiCodeBracesBox snapshot", () => {
  const wrapper = mount(MdiCodeBracesBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
