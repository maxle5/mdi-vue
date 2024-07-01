
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMushroom from "../../src/components/MdiMushroom.vue";

test("MdiMushroom snapshot", () => {
  const wrapper = mount(MdiMushroom, {});
  expect(wrapper.html()).toMatchSnapshot();
});
