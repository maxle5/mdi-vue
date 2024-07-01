
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSymfony from "../../src/components/MdiSymfony.vue";

test("MdiSymfony snapshot", () => {
  const wrapper = mount(MdiSymfony, {});
  expect(wrapper.html()).toMatchSnapshot();
});
