
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaWCircleOutline from "../../src/components/MdiAlphaWCircleOutline.vue";

test("MdiAlphaWCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaWCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
