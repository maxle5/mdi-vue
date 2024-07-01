
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMicroSd from "../../src/components/MdiMicroSd.vue";

test("MdiMicroSd snapshot", () => {
  const wrapper = mount(MdiMicroSd, {});
  expect(wrapper.html()).toMatchSnapshot();
});
