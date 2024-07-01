
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailbox from "../../src/components/MdiMailbox.vue";

test("MdiMailbox snapshot", () => {
  const wrapper = mount(MdiMailbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
