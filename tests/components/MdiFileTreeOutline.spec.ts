
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileTreeOutline from "../../src/components/MdiFileTreeOutline.vue";

test("MdiFileTreeOutline snapshot", () => {
  const wrapper = mount(MdiFileTreeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
