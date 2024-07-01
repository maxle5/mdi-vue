
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDotsHorizontal from "../../src/components/MdiDotsHorizontal.vue";

test("MdiDotsHorizontal snapshot", () => {
  const wrapper = mount(MdiDotsHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
