
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxOpenUp from "../../src/components/MdiMailboxOpenUp.vue";

test("MdiMailboxOpenUp snapshot", () => {
  const wrapper = mount(MdiMailboxOpenUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
