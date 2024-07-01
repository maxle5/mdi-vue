
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaper from "../../src/components/MdiNewspaper.vue";

test("MdiNewspaper snapshot", () => {
  const wrapper = mount(MdiNewspaper, {});
  expect(wrapper.html()).toMatchSnapshot();
});
