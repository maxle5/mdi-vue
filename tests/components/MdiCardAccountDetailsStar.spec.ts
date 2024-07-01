
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardAccountDetailsStar from "../../src/components/MdiCardAccountDetailsStar.vue";

test("MdiCardAccountDetailsStar snapshot", () => {
  const wrapper = mount(MdiCardAccountDetailsStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
