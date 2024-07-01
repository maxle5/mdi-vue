
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCordova from "../../src/components/MdiCordova.vue";

test("MdiCordova snapshot", () => {
  const wrapper = mount(MdiCordova, {});
  expect(wrapper.html()).toMatchSnapshot();
});
