
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLibraryShelves from "../../src/components/MdiLibraryShelves.vue";

test("MdiLibraryShelves snapshot", () => {
  const wrapper = mount(MdiLibraryShelves, {});
  expect(wrapper.html()).toMatchSnapshot();
});
