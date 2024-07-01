
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewSequentialOutline from "../../src/components/MdiViewSequentialOutline.vue";

test("MdiViewSequentialOutline snapshot", () => {
  const wrapper = mount(MdiViewSequentialOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
