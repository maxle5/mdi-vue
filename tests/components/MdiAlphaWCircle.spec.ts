
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaWCircle from "../../src/components/MdiAlphaWCircle.vue";

test("MdiAlphaWCircle snapshot", () => {
  const wrapper = mount(MdiAlphaWCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
