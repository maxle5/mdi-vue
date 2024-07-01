
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewQuiltOutline from "../../src/components/MdiViewQuiltOutline.vue";

test("MdiViewQuiltOutline snapshot", () => {
  const wrapper = mount(MdiViewQuiltOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
