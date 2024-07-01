
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomeLight from "../../src/components/MdiDomeLight.vue";

test("MdiDomeLight snapshot", () => {
  const wrapper = mount(MdiDomeLight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
