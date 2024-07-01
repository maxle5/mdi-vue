
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageStar from "../../src/components/MdiMessageStar.vue";

test("MdiMessageStar snapshot", () => {
  const wrapper = mount(MdiMessageStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
