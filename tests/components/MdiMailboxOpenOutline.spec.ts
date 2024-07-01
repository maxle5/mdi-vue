
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxOpenOutline from "../../src/components/MdiMailboxOpenOutline.vue";

test("MdiMailboxOpenOutline snapshot", () => {
  const wrapper = mount(MdiMailboxOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
