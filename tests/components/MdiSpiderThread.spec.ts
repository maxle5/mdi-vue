
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpiderThread from "../../src/components/MdiSpiderThread.vue";

test("MdiSpiderThread snapshot", () => {
  const wrapper = mount(MdiSpiderThread, {});
  expect(wrapper.html()).toMatchSnapshot();
});
