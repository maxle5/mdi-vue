
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailSealOutline from "../../src/components/MdiEmailSealOutline.vue";

test("MdiEmailSealOutline snapshot", () => {
  const wrapper = mount(MdiEmailSealOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
