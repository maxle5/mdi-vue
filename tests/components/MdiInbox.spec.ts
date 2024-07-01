
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInbox from "../../src/components/MdiInbox.vue";

test("MdiInbox snapshot", () => {
  const wrapper = mount(MdiInbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
