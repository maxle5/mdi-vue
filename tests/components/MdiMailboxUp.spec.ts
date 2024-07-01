
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxUp from "../../src/components/MdiMailboxUp.vue";

test("MdiMailboxUp snapshot", () => {
  const wrapper = mount(MdiMailboxUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
