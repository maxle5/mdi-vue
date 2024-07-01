
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckDecagram from "../../src/components/MdiCheckDecagram.vue";

test("MdiCheckDecagram snapshot", () => {
  const wrapper = mount(MdiCheckDecagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
