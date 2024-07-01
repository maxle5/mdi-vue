
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBunkBed from "../../src/components/MdiBunkBed.vue";

test("MdiBunkBed snapshot", () => {
  const wrapper = mount(MdiBunkBed, {});
  expect(wrapper.html()).toMatchSnapshot();
});
