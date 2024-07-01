
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchivePlus from "../../src/components/MdiArchivePlus.vue";

test("MdiArchivePlus snapshot", () => {
  const wrapper = mount(MdiArchivePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
