
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterBlackWhite from "../../src/components/MdiImageFilterBlackWhite.vue";

test("MdiImageFilterBlackWhite snapshot", () => {
  const wrapper = mount(MdiImageFilterBlackWhite, {});
  expect(wrapper.html()).toMatchSnapshot();
});
