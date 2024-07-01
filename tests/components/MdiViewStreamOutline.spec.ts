
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewStreamOutline from "../../src/components/MdiViewStreamOutline.vue";

test("MdiViewStreamOutline snapshot", () => {
  const wrapper = mount(MdiViewStreamOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
