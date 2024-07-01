
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileEditOutline from "../../src/components/MdiFileEditOutline.vue";

test("MdiFileEditOutline snapshot", () => {
  const wrapper = mount(MdiFileEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
