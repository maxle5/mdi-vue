
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSubdirectoryArrowLeft from "../../src/components/MdiSubdirectoryArrowLeft.vue";

test("MdiSubdirectoryArrowLeft snapshot", () => {
  const wrapper = mount(MdiSubdirectoryArrowLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
