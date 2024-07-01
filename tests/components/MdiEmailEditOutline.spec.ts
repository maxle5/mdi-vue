
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailEditOutline from "../../src/components/MdiEmailEditOutline.vue";

test("MdiEmailEditOutline snapshot", () => {
  const wrapper = mount(MdiEmailEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
