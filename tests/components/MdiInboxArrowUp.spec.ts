
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxArrowUp from "../../src/components/MdiInboxArrowUp.vue";

test("MdiInboxArrowUp snapshot", () => {
  const wrapper = mount(MdiInboxArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
