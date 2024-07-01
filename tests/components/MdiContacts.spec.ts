
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContacts from "../../src/components/MdiContacts.vue";

test("MdiContacts snapshot", () => {
  const wrapper = mount(MdiContacts, {});
  expect(wrapper.html()).toMatchSnapshot();
});
