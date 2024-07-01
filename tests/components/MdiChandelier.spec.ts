
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChandelier from "../../src/components/MdiChandelier.vue";

test("MdiChandelier snapshot", () => {
  const wrapper = mount(MdiChandelier, {});
  expect(wrapper.html()).toMatchSnapshot();
});
