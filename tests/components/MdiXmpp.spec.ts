
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiXmpp from "../../src/components/MdiXmpp.vue";

test("MdiXmpp snapshot", () => {
  const wrapper = mount(MdiXmpp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
