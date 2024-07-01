
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewCompactOutline from "../../src/components/MdiViewCompactOutline.vue";

test("MdiViewCompactOutline snapshot", () => {
  const wrapper = mount(MdiViewCompactOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
