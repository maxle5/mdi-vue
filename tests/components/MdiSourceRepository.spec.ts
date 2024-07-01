
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSourceRepository from "../../src/components/MdiSourceRepository.vue";

test("MdiSourceRepository snapshot", () => {
  const wrapper = mount(MdiSourceRepository, {});
  expect(wrapper.html()).toMatchSnapshot();
});
