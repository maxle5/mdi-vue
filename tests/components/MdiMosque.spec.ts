
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMosque from "../../src/components/MdiMosque.vue";

test("MdiMosque snapshot", () => {
  const wrapper = mount(MdiMosque, {});
  expect(wrapper.html()).toMatchSnapshot();
});
