
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTerraform from "../../src/components/MdiTerraform.vue";

test("MdiTerraform snapshot", () => {
  const wrapper = mount(MdiTerraform, {});
  expect(wrapper.html()).toMatchSnapshot();
});
