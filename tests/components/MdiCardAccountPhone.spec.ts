
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountPhone from "../../src/components/MdiCardAccountPhone.vue";

test("MdiCardAccountPhone snapshot", () => {
  const wrapper = mount(MdiCardAccountPhone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
