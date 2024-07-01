
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMoonNew from "../../src/components/MdiMoonNew.vue";

test("MdiMoonNew snapshot", () => {
  const wrapper = mount(MdiMoonNew, {});
  expect(wrapper.html()).toMatchSnapshot();
});
