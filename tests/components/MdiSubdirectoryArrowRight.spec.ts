
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubdirectoryArrowRight from "../../src/components/MdiSubdirectoryArrowRight.vue";

test("MdiSubdirectoryArrowRight snapshot", () => {
  const wrapper = mount(MdiSubdirectoryArrowRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
