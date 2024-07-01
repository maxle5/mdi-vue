
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountEditOutline from "../../src/components/MdiAccountEditOutline.vue";

test("MdiAccountEditOutline snapshot", () => {
  const wrapper = mount(MdiAccountEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
