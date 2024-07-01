
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCastConnected from "../../src/components/MdiCastConnected.vue";

test("MdiCastConnected snapshot", () => {
  const wrapper = mount(MdiCastConnected, {});
  expect(wrapper.html()).toMatchSnapshot();
});
