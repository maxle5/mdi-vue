
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKitesurfing from "../../src/components/MdiKitesurfing.vue";

test("MdiKitesurfing snapshot", () => {
  const wrapper = mount(MdiKitesurfing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
