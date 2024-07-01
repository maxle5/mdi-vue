
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailMarkAsUnread from "../../src/components/MdiEmailMarkAsUnread.vue";

test("MdiEmailMarkAsUnread snapshot", () => {
  const wrapper = mount(MdiEmailMarkAsUnread, {});
  expect(wrapper.html()).toMatchSnapshot();
});
