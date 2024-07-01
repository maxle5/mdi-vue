
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDlna from "../../src/components/MdiDlna.vue";

test("MdiDlna snapshot", () => {
  const wrapper = mount(MdiDlna, {});
  expect(wrapper.html()).toMatchSnapshot();
});
