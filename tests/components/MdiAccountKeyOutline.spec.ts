
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountKeyOutline from "../../src/components/MdiAccountKeyOutline.vue";

test("MdiAccountKeyOutline snapshot", () => {
  const wrapper = mount(MdiAccountKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
