
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformation from "../../src/components/MdiInformation.vue";

test("MdiInformation snapshot", () => {
  const wrapper = mount(MdiInformation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
